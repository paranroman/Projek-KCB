import os

os.environ['TF_ENABLE_ONEDNN_OPTS'] = '0'

import numpy as np
from tensorflow.keras.utils import to_categorical
from keras.layers import Input, Dense, Dropout
from keras.models import Model


folder_name = "ekspresi"
if not os.path.exists(folder_name):
    raise FileNotFoundError(f"Folder {folder_name} tidak ditemukan.")

model_folder = "model"
if not os.path.exists(model_folder):
    os.makedirs(model_folder)

is_init = False
size = -1

label = []
dictionary = {}
c = 0

for individual_name in os.listdir(folder_name):
    individual_folder = os.path.join(folder_name, individual_name)
    if os.path.isdir(individual_folder):
        for file_name in os.listdir(individual_folder):
            if file_name.endswith(".npy"):
                file_path = os.path.join(individual_folder, file_name)
                data = np.load(file_path)
                print(f"Loaded {file_name} with shape {data.shape}")

                if not is_init:
                    is_init = True
                    X = data
                    size = X.shape[0]
                    y = np .array([file_name.split(".")[0]] * size).reshape(-1, 1)
                else:
                    X = np.concatenate((X, data))
                    y = np.concatenate((y, np.array([file_name.split(".")[0]] * size).reshape(-1, 1)))

                label.append(file_name.split(".")[0])
                dictionary[file_name.split(".")[0]] = c
                c += 1

print(f"Final X shape: {X.shape}")
if len(X.shape) == 1:
    X = X.reshape(-1, 1)
    print(f"X reshaped to: {X.shape}")

for i in range(y.shape[0]):
    y[i, 0] = dictionary[y[i, 0]]
y = np.array(y, dtype="int32")

y = to_categorical(y)

X_new = X.copy()
y_new = y.copy()
counter = 0
cnt = np.arange(X.shape[0])
np.random.shuffle(cnt)

for i in cnt:
    X_new[counter] = X[i]
    y_new[counter] = y[i]
    counter += 1

ip = Input(shape=(X.shape[1],))
m = Dense(512, activation="relu")(ip)
m = Dropout(0.5)(m)  
m = Dense(256, activation="relu")(m)
m = Dropout(0.5)(m)  
op = Dense(y.shape[1], activation="softmax")(m)

model = Model(inputs=ip, outputs=op)

model.compile(optimizer="adam", loss="categorical_crossentropy", metrics=["accuracy"])  

model.fit(X_new, y_new, epochs=100, batch_size=32)  

model_path = os.path.join(model_folder, "model.h5")
labels_path = os.path.join(model_folder, "labels.npy")

model.save(model_path)
np.save(labels_path, np.array(label))

print(f"Model disimpan di: {model_path}")
print(f"Label disimpan di: {labels_path}")