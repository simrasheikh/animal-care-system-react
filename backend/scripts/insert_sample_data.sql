INSERT INTO Staff (name, role, phone_number, email, password)
VALUES ('Subata Naveen Khan', 'Admin', '03314991818', 's.khan_18119@khi.iba.edu.pk', 'subatacare123');

INSERT INTO Staff (name, role, phone_number, email, password)
VALUES ('Simra Sheikh', 'Admin', '03175776779', 's.sheikh.27135@animalcare.com', 'simracare123');

INSERT INTO Animals (name, species, breed, age, gender, weight, intake_date, description, PHOTO_URL)
VALUES ('Max', 'Dog', 'Labrador', 5, 'Male', 32.29, SYSDATE, 'Friendly dog', 
'https://drive.google.com/file/d/1Y-w41o2_hTdqP9iC4YUQXop1zCm8jiq5/view?usp=sharing');

INSERT INTO Animals (name, species, breed, age, gender, weight, intake_date, description, PHOTO_URL)
VALUES ('Whiskers', 'Cat', 'Persian', 3, 'Female', 3.5, SYSDATE - 20, 'Calm and affectionate',
'https://drive.google.com/file/d/1FbaW00D9gYCZC2Q6UxHKO4jh7KiBQIbC/view?usp=sharing');

INSERT INTO Animals (name, species, breed, age, gender, weight, intake_date, description, PHOTO_URL)
VALUES ('Buddy', 'Dog', 'Beagle', 4, 'Male', 18.49, SYSDATE - 15, 'Energetic and curious', 
'https://drive.google.com/file/d/1asttSsOVLnN8y4FUrHfsFbjnhap0lznJ/view?usp=sharing');

INSERT INTO OWNERS (name, username, phone_number, email, password)
VALUES ('John Doe', 'john123', '1234567890', 'john@example.com' , 'johndoepassword');

INSERT INTO OWNERS (name, username, phone_number, email, password)
VALUES ('Bob Johnson', 'bob123', '1112223333', 'bob@example.com' , 'bobjohnsonpassword123');

INSERT INTO OWNERS (name, username, phone_number, email, password)
VALUES ('Jane Smith', 'jane123', '0987654321', 'jane@example.com', 'janesmithpassword123');

INSERT INTO Vets (name, specialization, phone_number, email, available_times)
VALUES ('Dr. Brown', 'Surgery', '1112223333', 'dr.brown@example.com', 'Mon 10:00 AM - 2:00 PM, Wed 9:00 AM - 1:00 PM');

INSERT INTO Vets (name, specialization, phone_number, email, available_times)
VALUES ('Dr. Sarah Lee', 'Surgery', '5556667777', 'sarah.lee@example.com', 'Tue 11:00 AM - 3:00 PM, Thu 9:00 AM - 12:00 PM');

INSERT INTO Vets (name, specialization, phone_number, email, available_times)
VALUES ('Dr. Kevin Smith', 'Vaccination', '8889990000', 'kevin.smith@example.com', 'Fri 11:00 AM - 3:00 PM, Sat 9:00 AM - 12:00 PM');

INSERT INTO Vets (name, specialization, phone_number, email, available_times)
VALUES ('Dr. John Peter', 'Vaccination', '9990000111', 'john.peter@example.com', 'Mon 10:00 AM - 2:00 PM, Wed 9:00 AM - 1:00 PM');

INSERT INTO Vets (name, specialization, phone_number, email, available_times)
VALUES ('Dr. Jane Bolt', 'Surgery', '0000111222', 'jane.bolt@example.com', 'Tue 11:00 AM - 3:00 PM, Sat 9:00 AM - 12:00 PM');
commit;
-- 

INSERT INTO MedicalRecords (animal_id, treatment_date, diagnosis, treatment_details, vet_id, next_checkup_date)
VALUES (1, SYSDATE, 'Minor Infection', 'Administered antibiotics', 1, SYSDATE + 30);

INSERT INTO MedicalRecords (animal_id, treatment_date, diagnosis, treatment_details, vet_id, next_checkup_date)
VALUES (22, SYSDATE - 10, 'Skin Allergy', 'Special shampoo prescribed', 22, SYSDATE + 15);

INSERT INTO Vet (name, specialization, phone_number, email)
VALUES ('Dr. John Doe', 'Dermatology', '1234567890', 'johndoe@example.com');

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
