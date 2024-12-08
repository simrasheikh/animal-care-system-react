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

-- INSERT INTO vets (name, image_url, phone_number, email)
-- VALUES ('Dr. Sarah Lee', '5556667777', 'sarah.lee@example.com');

-- INSERT INTO vets (name, image_url, phone_number, email)
-- VALUES ('Dr. Kevin Smith', '8889990000', 'kevin.smith@example.com');

-- INSERT INTO vets (name, image_url, phone_number, email)
-- VALUES ('Dr. John Peter', '9990000111', 'john.peter@example.com');

INSERT INTO vets (name, image_url, phone_number, email)
VALUES ('Dr. Jane Bolt', 'https://res.cloudinary.com/dcxfxdmsu/image/upload/v1733655012/charlie_zswu1n.jpg', '0000111222', 'jane.bolt@example.com');

INSERT INTO vets (name, image_url, phone_number, email)
VALUES ('Dr. John Doe', 'https://res.cloudinary.com/dcxfxdmsu/image/upload/v1733655012/charlie_zswu1n.jpg', '1234567890', 'johndoe@example.com');

commit;

-- INSERT INTO Donations (donor_name, amount, purpose)
-- VALUES ('Global Pet Foundation', 500.00, 'Medical Care');

-- INSERT INTO Donations (donor_name, amount, purpose)
-- VALUES ('Anonymous', 200.00, 'Food and Shelter');

-- INSERT INTO Donations (donor_name, amount, purpose)
-- VALUES ('Jane Smith', 300.00, 'Vaccination');
