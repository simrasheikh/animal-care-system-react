INSERT INTO staff (name, phone_number, email, password) VALUES ('Simra Sheikh', '03175776779', 's.sheikh.27135@animalcare.com', 'simracare123');
INSERT INTO staff (name, phone_number, email, password) VALUES ('Subata Naveen Khan', '03314991818', 's.khan_18119@animalcare.com', 'subatacare123');
INSERT INTO staff (name, phone_number, email, password) VALUES ('Alice Johnson', '5678901234', 'alice.johnson@example.com', 'alice2023');
INSERT INTO staff (name, phone_number, email, password) VALUES ('Bob Brown', '4321098765', 'bob.brown@example.com', 'bobbrown!');
INSERT INTO staff (name, phone_number, email, password) VALUES ('Emma Wilson', '8765432109', 'emma.wilson@example.com', 'emmapass');
INSERT INTO staff (name, phone_number, email, password) VALUES ('Charlie Taylor', '3456789012', 'charlie.taylor@example.com', 'ch@rlie99');
INSERT INTO staff (name, phone_number, email, password) VALUES ('Olivia Martin', '8901234567', 'olivia.martin@example.com', 'martin2024');
INSERT INTO staff (name, phone_number, email, password) VALUES ('Ethan Lewis', '9012345678', 'ethan.lewis@example.com', 'lewis!ethan');
INSERT INTO staff (name, phone_number, email, password) VALUES ('Sophia Clark', '2109876543', 'sophia.clark@example.com', 'clarkSophia');
INSERT INTO staff (name, phone_number, email, password) VALUES ('Liam Davis', '6789012345', 'liam.davis@example.com', 'davisLiam#');

INSERT INTO animals (animal_name, species, breed, age, gender, weight, description, photo_url) VALUES ('Bella', 'Dog', 'Labrador', 4, 'Female', 25.3, 'Friendly and energetic', 'https://res.cloudinary.com/dcxfxdmsu/image/upload/v1733716383/pexels-wildlittlethingsphoto-2253275_kzltg5.jpg');
INSERT INTO animals (animal_name, species, breed, age, gender, weight, description, photo_url) VALUES ('Max', 'Dog', 'Beagle', 3, 'Male', 18.5, 'Curious and loyal', 'https://res.cloudinary.com/dcxfxdmsu/image/upload/v1733716383/pexels-svetozar-milashevich-99573-1490908_mseqzb.jpg');
INSERT INTO animals (animal_name, species, breed, age, gender, weight, description, photo_url) VALUES ('Whiskers', 'Cat', 'Persian', 2, 'Female', 3.5, 'Calm and affectionate', 'https://res.cloudinary.com/dcxfxdmsu/image/upload/v1733716382/images_1_zxxrfl.jpg');
INSERT INTO animals (animal_name, species, breed, age, gender, weight, description, photo_url) VALUES ('Charlie', 'Dog', 'Golden Retriever', 5, 'Male', 30.0, 'Playful and loving', 'https://res.cloudinary.com/dcxfxdmsu/image/upload/v1733716382/istockphoto-467923438-612x612_hrt19w.jpg');
INSERT INTO animals (animal_name, species, breed, age, gender, weight, description, photo_url) VALUES ('Shadow', 'Cat', 'Siamese', 4, 'Male', 4.1, 'Mysterious and independent', 'https://res.cloudinary.com/dcxfxdmsu/image/upload/v1733716382/pexels-ingewallu-177809_sdomel.jpg');
INSERT INTO animals (animal_name, species, breed, age, gender, weight, description, photo_url) VALUES ('Luna', 'Cat', 'Maine Coon', 3, 'Female', 6.2, 'Playful and curious', 'https://res.cloudinary.com/dcxfxdmsu/image/upload/v1733716382/funny-large-longhair-gray-kitten-600nw-1842198919_nbib5u.webp');

INSERT INTO owners (owner_name, username, phone_number, email, password) VALUES ('John Doe', 'johndoe', '1234567890', 'john.doe@example.com', 'johnpassword');
INSERT INTO owners (owner_name, username, phone_number, email, password) VALUES ('Jane Smith', 'janesmith', '2345678901', 'jane.smith@example.com', 'jane2023');
INSERT INTO owners (owner_name, username, phone_number, email, password) VALUES ('Emily Davis', 'emilyd', '3456789012', 'emily.davis@example.com', 'davisEmily');
INSERT INTO owners (owner_name, username, phone_number, email, password) VALUES ('Robert Johnson', 'robertj', '4567890123', 'robert.johnson@example.com', 'robertjohnson');
INSERT INTO owners (owner_name, username, phone_number, email, password) VALUES ('Michael Brown', 'michaelb', '5678901234', 'michael.brown@example.com', 'brownMichael');
INSERT INTO owners (owner_name, username, phone_number, email, password) VALUES ('Sarah Wilson', 'sarahw', '6789012345', 'sarah.wilson@example.com', 'wilsonSarah');
INSERT INTO owners (owner_name, username, phone_number, email, password) VALUES ('Daniel Martin', 'danielm', '7890123456', 'daniel.martin@example.com', 'martinDaniel');
INSERT INTO owners (owner_name, username, phone_number, email, password) VALUES ('Sophia Taylor', 'sophiat', '8901234567', 'sophia.taylor@example.com', 'taylorSophia');
INSERT INTO owners (owner_name, username, phone_number, email, password) VALUES ('Chris Clark', 'chrisc', '9012345678', 'chris.clark@example.com', 'clarkChris');
INSERT INTO owners (owner_name, username, phone_number, email, password) VALUES ('Olivia Lewis', 'olivial', '2109876543', 'olivia.lewis@example.com', 'lewisOlivia');

INSERT INTO adoption_applications (animal_id, owner_id) VALUES (1, 1);
INSERT INTO adoption_applications (animal_id, owner_id) VALUES (2, 2);
INSERT INTO adoption_applications (animal_id, owner_id) VALUES (3, 3);
INSERT INTO adoption_applications (animal_id, owner_id) VALUES (4, 4);
INSERT INTO adoption_applications (animal_id, owner_id) VALUES (5, 5);

INSERT INTO vets (name, image_url, phone_number, email) VALUES ('Dr. Sam Wilson', 'https://res.cloudinary.com/dcxfxdmsu/image/upload/v1733715727/portrait-handsome-smiling-young-man-folded-arms-smiling-joyful-cheerful-men-crossed-hands-isolated-studio-shot-172869765_xp6ak5.webp', '1231231234', 'sam.wilson@example.com');
INSERT INTO vets (name, image_url, phone_number, email) VALUES ('Dr. Sarah Lee', 'https://res.cloudinary.com/dcxfxdmsu/image/upload/v1733715896/fashion-industry-black-woman-designer-600nw-2235667567_uwggc9.webp', '2342342345', 'sarah.lee@example.com');
INSERT INTO vets (name, image_url, phone_number, email) VALUES ('Dr. Tom Brown', 'https://res.cloudinary.com/dcxfxdmsu/image/upload/v1733715726/istockphoto-1389465862-612x612_tidcoh.jpg', '3453453456', 'tom.brown@example.com');
INSERT INTO vets (name, image_url, phone_number, email) VALUES ('Dr. Emily Carter', 'https://res.cloudinary.com/dcxfxdmsu/image/upload/v1733715896/depositphotos_315935436-stock-photo-beautiful-female-african-american-business_l7zrev.webp', '4564564567', 'emily.carter@example.com');
INSERT INTO vets (name, image_url, phone_number, email) VALUES ('Dr. David Smith', 'https://res.cloudinary.com/dcxfxdmsu/image/upload/v1733715727/pexels-photo-2379004_ay6ifa.jpg', '5675675678', 'david.smith@example.com');
INSERT INTO vets (name, image_url, phone_number, email) VALUES ('Dr. Olivia Jones', 'https://res.cloudinary.com/dcxfxdmsu/image/upload/v1733715896/professional-smiling-woman_ce0qdn.jpg', '6786786789', 'olivia.jones@example.com');

INSERT INTO appointments (vet_id, owner_id, appointment_date_time, notes) VALUES (1, 1, TO_DATE('2024-12-10 10:00:00', 'YYYY-MM-DD HH24:MI:SS'), 'General Checkup');
INSERT INTO appointments (vet_id, owner_id, appointment_date_time, notes) VALUES (2, 2, TO_DATE('2024-12-11 11:00:00', 'YYYY-MM-DD HH24:MI:SS'), 'Vaccination');
INSERT INTO appointments (vet_id, owner_id, appointment_date_time, notes) VALUES (3, 3, TO_DATE('2024-12-12 09:00:00', 'YYYY-MM-DD HH24:MI:SS'), 'Dental Check');
INSERT INTO appointments (vet_id, owner_id, appointment_date_time, notes) VALUES (4, 4, TO_DATE('2024-12-13 14:00:00', 'YYYY-MM-DD HH24:MI:SS'), 'Behavior Consultation');
INSERT INTO appointments (vet_id, owner_id, appointment_date_time, notes) VALUES (5, 5, TO_DATE('2024-12-14 15:00:00', 'YYYY-MM-DD HH24:MI:SS'), 'Surgery Follow-Up');

commit;
