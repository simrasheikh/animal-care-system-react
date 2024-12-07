INSERT INTO Staff (name, role, phone_number, email, password)
VALUES ('Subata Naveen Khan', 'Admin', '03314991818', 's.khan_18119@khi.iba.edu.pk', '123');

INSERT INTO Staff (name, role, phone_number, email, password)
VALUES ('Simra Sheikh', 'Admin', '7778889999', 'tom@example.com', '123');

INSERT INTO Staff (name, role, phone_number, email, password)
VALUES ('Emma Davis', 'Admin', '2223334444', 'emma@example.com', '123');

INSERT INTO Animals (name, species, breed, age, intake_date, description, PHOTO_URL)
VALUES ('Max', 'Dog', 'Labrador', 5, SYSDATE, 'Friendly dog', 
'https://drive.google.com/file/d/1Y-w41o2_hTdqP9iC4YUQXop1zCm8jiq5/view?usp=sharing');

INSERT INTO Animals (name, species, breed, age, intake_date, description, PHOTO_URL)
VALUES ('Whiskers', 'Cat', 'Persian', 3, SYSDATE - 20, 'Calm and affectionate',
'https://drive.google.com/file/d/1FbaW00D9gYCZC2Q6UxHKO4jh7KiBQIbC/view?usp=sharing');

INSERT INTO Animals (name, species, breed, age, intake_date, description, PHOTO_URL)
VALUES ('Buddy', 'Dog', 'Beagle', 4, SYSDATE - 15, 'Energetic and curious', 
'https://drive.google.com/file/d/1asttSsOVLnN8y4FUrHfsFbjnhap0lznJ/view?usp=sharing');

INSERT INTO OWNERS (name, address, phone_number, email)
VALUES ('John Doe', '1234 Elm Street', '1234567890', 'john@example.com');

INSERT INTO owners (name, address, phone_number, email)
VALUES ('Bob Johnson', '789 Pine Road', '1112223333', 'bob@example.com');

INSERT INTO owners (name, address, phone_number, email)
VALUES ('Jane Smith', '456 Oak Avenue', '0987654321', 'jane@example.com');


-- 

INSERT INTO Vet (name, specialization, phone_number, email, available_hours)
VALUES ('Dr. Brown', 'Surgery', '1112223333', 'dr.brown@example.com', '10 AM - 4 PM');

INSERT INTO MedicalRecords (animal_id, treatment_date, diagnosis, treatment_details, vet_id, next_checkup_date)
VALUES (1, SYSDATE, 'Minor Infection', 'Administered antibiotics', 1, SYSDATE + 30);

INSERT INTO Vet (name, specialization, phone_number, email, available_hours)
VALUES ('Dr. Sarah Lee', 'Surgery', '5556667777', 'sarah.lee@example.com', '10 AM - 4 PM');

INSERT INTO Vet (name, specialization, phone_number, email, available_hours)
VALUES ('Dr. Kevin Smith', 'Vaccination', '8889990000', 'kevin.smith@example.com', '9 AM - 3 PM');

INSERT INTO MedicalRecords (animal_id, treatment_date, diagnosis, treatment_details, vet_id, next_checkup_date)
VALUES (22, SYSDATE - 10, 'Skin Allergy', 'Special shampoo prescribed', 22, SYSDATE + 15);

INSERT INTO Vet (name, specialization, phone_number, email, available_hours)
VALUES ('Dr. John Doe', 'Dermatology', '1234567890', 'johndoe@example.com', '9 AM - 5 PM');

INSERT INTO Animals (name, species, breed, age, intake_date, description, health_status, vaccination_status)
VALUES ('Buddy', 'Dog', 'Beagle', 4, SYSDATE - 15, 'Energetic and curious', 'Minor allergy', 'Up-to-date');

INSERT INTO Donations (donor_name, amount, purpose)
VALUES ('Global Pet Foundation', 500.00, 'Medical Care');

INSERT INTO Donations (donor_name, amount, purpose)
VALUES ('Anonymous', 200.00, 'Food and Shelter');

INSERT INTO Donations (donor_name, amount, purpose)
VALUES ('Jane Smith', 300.00, 'Vaccination');

INSERT INTO Adoptions (animal_id, adopter_id, status, adoption_date)
VALUES (1, 1, 'Approved', SYSDATE - 7);

INSERT INTO Adoptions (animal_id, adopter_id, status, adoption_date)
VALUES (1, 1, 'Pending', SYSDATE);
