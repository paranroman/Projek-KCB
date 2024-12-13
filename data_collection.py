import os

os.environ['TF_ENABLE_ONEDNN_OPTS'] = '0'

import cv2
import numpy as np
import mediapipe as mp


folder_name = "ekspresi"
if not os.path.exists(folder_name):
    os.makedirs(folder_name)

cap = cv2.VideoCapture(0)

expression_name = input("Masukkan nama ekspresi: ")

while True:
    individual_name = input("Masukkan nama individu (atau ketik 'selesai' untuk mengakhiri): ")
    if individual_name.lower() == 'selesai':
        break

    individual_folder = os.path.join(folder_name, individual_name)
    if not os.path.exists(individual_folder):
        os.makedirs(individual_folder)

    holis = mp.solutions.holistic.Holistic()
    drawing = mp.solutions.drawing_utils

    X = []
    data_size = 0

    while True:
        lst = []
        _, frm = cap.read()
        frm = cv2.flip(frm, 1)
        res = holis.process(cv2.cvtColor(frm, cv2.COLOR_BGR2RGB))

        if res.face_landmarks:
            for i in res.face_landmarks.landmark:
                lst.append(i.x - res.face_landmarks.landmark[1].x)
                lst.append(i.y - res.face_landmarks.landmark[1].y)

            if res.left_hand_landmarks:
                for i in res.left_hand_landmarks.landmark:
                    lst.append(i.x - res.left_hand_landmarks.landmark[8].x)
                    lst.append(i.y - res.left_hand_landmarks.landmark[8].y)
            else:
                for i in range(42):
                    lst.append(0.0)

            if res.right_hand_landmarks:
                for i in res.right_hand_landmarks.landmark:
                    lst.append(i.x - res.right_hand_landmarks.landmark[8].x)
                    lst.append(i.y - res.right_hand_landmarks.landmark[8].y)
            else:
                for i in range(42):
                    lst.append(0.0)

            X.append(lst)
            data_size += 1

        drawing.draw_landmarks(frm, res.face_landmarks, mp.solutions.holistic.FACEMESH_CONTOURS)
        drawing.draw_landmarks(frm, res.left_hand_landmarks, mp.solutions.hands.HAND_CONNECTIONS)
        drawing.draw_landmarks(frm, res.right_hand_landmarks, mp.solutions.hands.HAND_CONNECTIONS)

        cv2.putText(frm, str(data_size), (50, 50), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)
        cv2.imshow("window", frm)

        if cv2.waitKey(1) == 27 or data_size > 99:
            cv2.destroyAllWindows()
            break

    file_path = os.path.join(individual_folder, f"{expression_name}.npy")
    np.save(file_path, np.array(X))
    print(f"Data ekspresi {expression_name} untuk {individual_name} disimpan di {file_path}")

cap.release()