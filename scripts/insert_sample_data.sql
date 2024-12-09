INSERT INTO staff (name, 
-- role, 
phone_number, email, password)
VALUES ('Subata Naveen Khan', 
-- 'Admin', 
'03314991818', 's.khan_18119@animalcare.com', 'subatacare123');

INSERT INTO staff (name, 
-- role, 
phone_number, email, password)
VALUES ('Simra Sheikh', 
-- 'Admin', 
'03175776779', 's.sheikh.27135@animalcare.com', 'simracare123');

INSERT INTO staff (name, phone_number, email, password) VALUES ('John Smith', '1234567890', 's.sheikh.27135@animalcare.com', 'simracare123');
INSERT INTO staff (name, phone_number, email, password) VALUES ('Simra Sheikh', '03175776779', 'jane.doe@example.com', 'securepassword');
INSERT INTO staff (name, phone_number, email, password) VALUES ('Alice Johnson', '5678901234', 'alice.johnson@example.com', 'alice2023');
INSERT INTO staff (name, phone_number, email, password) VALUES ('Bob Brown', '4321098765', 'bob.brown@example.com', 'bobbrown!');
INSERT INTO staff (name, phone_number, email, password) VALUES ('Emma Wilson', '8765432109', 'emma.wilson@example.com', 'emmapass');
INSERT INTO staff (name, phone_number, email, password) VALUES ('Charlie Taylor', '3456789012', 'charlie.taylor@example.com', 'ch@rlie99');
INSERT INTO staff (name, phone_number, email, password) VALUES ('Olivia Martin', '8901234567', 'olivia.martin@example.com', 'martin2024');
INSERT INTO staff (name, phone_number, email, password) VALUES ('Ethan Lewis', '9012345678', 'ethan.lewis@example.com', 'lewis!ethan');
INSERT INTO staff (name, phone_number, email, password) VALUES ('Sophia Clark', '2109876543', 'sophia.clark@example.com', 'clarkSophia');
INSERT INTO staff (name, phone_number, email, password) VALUES ('Liam Davis', '6789012345', 'liam.davis@example.com', 'davisLiam#');

INSERT INTO animals (animal_name, species, breed, age, gender, weight, description, photo_url) VALUES ('Bella', 'Dog', 'Labrador', 4, 'Female', 25.3, 'Friendly and energetic', 'https://example.com/bella.jpg');
INSERT INTO animals (animal_name, species, breed, age, gender, weight, description, photo_url) VALUES ('Max', 'Dog', 'Beagle', 3, 'Male', 18.5, 'Curious and loyal', 'https://example.com/max.jpg');
INSERT INTO animals (animal_name, species, breed, age, gender, weight, description, photo_url) VALUES ('Whiskers', 'Cat', 'Persian', 2, 'Female', 3.5, 'Calm and affectionate', 'https://example.com/whiskers.jpg');
INSERT INTO animals (animal_name, species, breed, age, gender, weight, description, photo_url) VALUES ('Charlie', 'Dog', 'Golden Retriever', 5, 'Male', 30.0, 'Playful and loving', 'https://example.com/charlie.jpg');
INSERT INTO animals (animal_name, species, breed, age, gender, weight, description, photo_url) VALUES ('Shadow', 'Cat', 'Siamese', 4, 'Male', 4.1, 'Mysterious and independent', 'https://example.com/shadow.jpg');
INSERT INTO animals (animal_name, species, breed, age, gender, weight, description, photo_url) VALUES ('Daisy', 'Dog', 'Bulldog', 6, 'Female', 23.7, 'Gentle and protective', 'https://example.com/daisy.jpg');
INSERT INTO animals (animal_name, species, breed, age, gender, weight, description, photo_url) VALUES ('Luna', 'Cat', 'Maine Coon', 3, 'Female', 6.2, 'Playful and curious', 'https://example.com/luna.jpg');
INSERT INTO animals (animal_name, species, breed, age, gender, weight, description, photo_url) VALUES ('Oscar', 'Dog', 'Pug', 2, 'Male', 10.8, 'Clownish and sociable', 'https://example.com/oscar.jpg');
INSERT INTO animals (animal_name, species, breed, age, gender, weight, description, photo_url) VALUES ('Simba', 'Cat', 'Bengal', 1, 'Male', 3.2, 'Adventurous and bold', 'https://example.com/simba.jpg');
INSERT INTO animals (animal_name, species, breed, age, gender, weight, description, photo_url) VALUES ('Milo', 'Dog', 'Border Collie', 3, 'Male', 20.5, 'Intelligent and energetic', 'https://example.com/milo.jpg');




INSERT INTO animals (animal_name, species, breed, age, gender, weight, intake_date, description, PHOTO_URL)
VALUES ('Max', 'Dog', 'Labrador', 5, 'Male', 32.29, SYSDATE - 5, 'Friendly dog', 
'https://res.cloudinary.com/dcxfxdmsu/image/upload/v1733657384/edpkjzrzxkmfwqhjg0gy.jpg');

INSERT INTO animals (animal_name, species, breed, age, gender, weight, intake_date, description, PHOTO_URL)
VALUES ('Whiskers', 'Cat', 'Persian', 3, 'Female', 3.5, SYSDATE - 20, 'Calm and affectionate',
'https://res.cloudinary.com/dcxfxdmsu/image/upload/v1733656679/bybcjn9przyrlufv6qo1.jpg');

INSERT INTO animals (animal_name, species, breed, age, gender, weight, intake_date, description, PHOTO_URL)
VALUES ('Buddy', 'Dog', 'Beagle', 4, 'Male', 18.49, SYSDATE - 15, 'Energetic and curious', 
'https://res.cloudinary.com/dcxfxdmsu/image/upload/v1733655012/charlie_zswu1n.jpg');

INSERT INTO owners (owner_name, username, phone_number, email, password)
VALUES ('John Doe', 'john123', '1234567890', 'john@example.com' , 'johndoepassword');

INSERT INTO owners (owner_name, username, phone_number, email, password)
VALUES ('Bob Johnson', 'bob123', '1112223333', 'bob@example.com' , 'bobjohnsonpassword123');

INSERT INTO owners (owner_name, username, phone_number, email, password)
VALUES ('Jane Smith', 'jane123', '0987654321', 'jane@example.com', 'janesmithpassword123');

INSERT INTO adoption_applications (animal_id, owner_id)
VALUES (1, 1);

INSERT INTO adoption_applications (animal_id, owner_id)
VALUES (1, 2);

INSERT INTO adoption_applications (animal_id, owner_id)
VALUES (1, 3);

INSERT INTO adoption_applications (animal_id, owner_id)
VALUES (2, 1);

INSERT INTO adoption_applications (animal_id, owner_id)
VALUES (2, 2);

INSERT INTO adoption_applications (animal_id, owner_id)
VALUES (2, 3);

INSERT INTO adoption_applications (animal_id, owner_id)
VALUES (3, 1);

INSERT INTO adoption_applications (animal_id, owner_id)
VALUES (3, 2);

INSERT INTO adoption_applications (animal_id, owner_id)
VALUES (3, 3);
commit;
-- INSERT INTO vets (name, image_url, phone_number, email)
-- VALUES ('Dr. Brown', '1112223333', 'dr.brown@example.com');

INSERT INTO vets (name, image_url, phone_number, email)
VALUES ('Dr. Sarah Lee', 'https://res.cloudinary.com/dcxfxdmsu/image/upload/v1733649150/samples/smile.jpg', '5556667777', 'sarah.lee@example.com');

-- INSERT INTO vets (name, image_url, phone_number, email)
-- VALUES ('Dr. Kevin Smith', '8889990000', 'kevin.smith@example.com');

-- INSERT INTO vets (name, image_url, phone_number, email)
-- VALUES ('Dr. John Peter', '9990000111', 'john.peter@example.com');

INSERT INTO vets (name, image_url, phone_number, email)
VALUES ('Dr. Jane Bolt', 'https://res.cloudinary.com/dcxfxdmsu/image/upload/v1733655012/charlie_zswu1n.jpg', '0000111222', 'jane.bolt@example.com');

INSERT INTO vets (name, image_url, phone_number, email)
VALUES ('Dr. John Doe', 'https://res.cloudinary.com/dcxfxdmsu/image/upload/v1733655012/charlie_zswu1n.jpg', '1234567890', 'johndoe@example.com');

insert into appointments (vet_id, owner_id, Appointment_Date_Time, notes) 
values (1, 1, to_date('2024-12-11 10:00', 'YYYY-MM-DD HH24:MI'), 'Checkup');

insert into appointments (vet_id, owner_id, Appointment_Date_Time, notes) 
values (1, 3, to_date('2024-12-15 13:30', 'YYYY-MM-DD HH24:MI'), 'Checkup');

insert into appointments (vet_id, owner_id, Appointment_Date_Time, notes) 
values (1, 1, to_date('2024-12-20 14:30', 'YYYY-MM-DD HH24:MI'), 'Checkup');


commit;


-- INSERT INTO Donations (donor_name, amount, purpose)
-- VALUES ('Global Pet Foundation', 500.00, 'Medical Care');

-- INSERT INTO Donations (donor_name, amount, purpose)
-- VALUES ('Anonymous', 200.00, 'Food and Shelter');

-- INSERT INTO Donations (donor_name, amount, purpose)
-- VALUES ('Jane Smith', 300.00, 'Vaccination');
