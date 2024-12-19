import streamlit as st
import cv2
import numpy as np
import mediapipe as mp
from keras.models import load_model
import json
import random

model = load_model("model/model.h5")
print(model.input_shape)

labels = np.load("model/labels.npy")
with open("movies.json", "r") as file:
    movies = json.load(file)

st.title("Rekomendasi Film Berdasarkan Ekspresi Wajah")
st.write("Upload gambar Anda untuk mendeteksi ekspresi wajah dan mendapatkan rekomendasi film.")

def preprocess_image(image):
    holis = mp.solutions.holistic.Holistic()
    res = holis.process(cv2.cvtColor(image, cv2.COLOR_BGR2RGB))

    if res.face_landmarks:
        landmarks = []

        for i in res.face_landmarks.landmark:
            landmarks.append(i.x - res.face_landmarks.landmark[1].x)  
            landmarks.append(i.y - res.face_landmarks.landmark[1].y)

        expected_features = 1020
        current_features = len(landmarks)

        if current_features < expected_features:
            landmarks += [0] * (expected_features - current_features)
        elif current_features > expected_features:
            landmarks = landmarks[:expected_features]

        return np.array(landmarks).reshape(1, -1)
    return None

def predict_expression(image):
    preprocessed_image = preprocess_image(image)
    if preprocessed_image is not None:
        emotion_pred = model.predict(preprocessed_image)
        emotion = labels[np.argmax(emotion_pred)]  
        return emotion
    return None

uploaded_file = st.file_uploader("Pilih gambar Anda", type=["jpg", "jpeg", "png"])

if uploaded_file is not None:
    image = np.array(bytearray(uploaded_file.read()), dtype=np.uint8)
    image = cv2.imdecode(image, 1)

    emotion = predict_expression(image)
    if emotion:
        st.image(image, caption="Gambar yang diunggah", use_container_width=True)
        st.write(f"Ekspresi wajah yang terdeteksi: **{emotion.capitalize()}**")

        genre_map = {
            "senang": "comedy",
            "sedih": "romance",
            "marah": "drama",
            "takut": "horror",
            "jijik": "thriller",
        }
        genre = genre_map.get(emotion, "comedy")

        if st.button("Rekomendasikan Aku Film"):
            genre_movies = [movie for movie in movies if movie["genre"].lower() == genre]
            if genre_movies:
                recommended_movie = random.choice(genre_movies)
                st.write(f"### Rekomendasi Film untuk Genre **{genre.capitalize()}**")
                st.subheader(recommended_movie["title"])
                col1, col2 = st.columns([1, 3])
                with col1:
                    st.image(recommended_movie["image"], width=120)
                with col2:
                    st.write(f"**Tahun:** {recommended_movie['year']}")
                    st.write(f"**Durasi:** {recommended_movie['duration']}")
                    st.write(f"**Rating:** {recommended_movie['rating']}")
                    st.write(f"**Deskripsi:** {recommended_movie['description']}")
            else:
                st.error("Tidak ada film tersedia untuk genre ini.")
    else:
        st.error("Ekspresi wajah tidak terdeteksi.")