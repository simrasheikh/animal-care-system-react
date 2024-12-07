CREATE TABLE Animals (
    animal_id NUMBER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    name VARCHAR2(50) NOT NULL,
    species VARCHAR2(50) NOT NULL,
    breed VARCHAR2(50),
    age NUMBER CHECK (age >= 0),
    gender VARCHAR2(10),
    weight NUMBER(10,2),
    status VARCHAR2(20) DEFAULT 'Available',
    intake_date DATE DEFAULT SYSDATE,
    description VARCHAR2(255),
    photo_url VARCHAR2(255)
);

CREATE TABLE Owners (
    owner_id NUMBER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    name VARCHAR2(100) NOT NULL,
    address varchar2(255) NOT NULL,
    phone_number VARCHAR2(15) UNIQUE,
    email VARCHAR2(100) UNIQUE
    
);

CREATE TABLE Adoptions (
    adoption_id NUMBER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    animal_id NUMBER NOT NULL,
    owner_id NUMBER NOT NULL,
    adoption_date DATE DEFAULT SYSDATE,
    status VARCHAR2(20) DEFAULT 'Pending',
    approval_date DATE,
    rejection_reason varchar2(255),
    CONSTRAINT fk_animal FOREIGN KEY (animal_id) REFERENCES Animals (animal_id) ON DELETE CASCADE,
    CONSTRAINT fk_owner FOREIGN KEY (owner_id) REFERENCES Owners (owner_id) ON DELETE CASCADE
);

CREATE TABLE Staff (
    staff_id NUMBER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    name VARCHAR2(100) NOT NULL,
    role VARCHAR2(20) NOT NULL,
    phone_number VARCHAR2(15) UNIQUE,
    email VARCHAR2(100) UNIQUE,
    password VARCHAR2(100) NOT NULL
);

drop table vets;

CREATE TABLE Vets (
    vet_id NUMBER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    name VARCHAR2(100) NOT NULL,
    specialization VARCHAR2(50),
    phone_number VARCHAR2(15) UNIQUE,
    email VARCHAR2(100) UNIQUE,
    available_times VARCHAR2(255)
);

drop table appointments;

CREATE TABLE Appointments (
    Appointment_ID NUMBER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY, -- Unique identifier for each appointment
    Vet_ID NUMBER NOT NULL, -- ID of the veterinarian
    Owner_ID NUMBER NOT NULL, -- ID of the pet owner
    Appointment_Date DATE NOT NULL, -- Date of the appointment
    Appointment_Time VARCHAR2(255) NOT NULL, -- Time of the appointment as a string
    Notes VARCHAR2(255), -- Optional field for additional details about the appointment
    CONSTRAINT fk_vet_apt FOREIGN KEY (Vet_ID) REFERENCES Vets(Vet_ID), -- Foreign key referencing Vets table
    CONSTRAINT fk_owner_apt FOREIGN KEY (Owner_ID) REFERENCES Owners(Owner_ID) -- Foreign key referencing Owners table
);

-- CREATE TABLE MedicalRecords (
--     record_id NUMBER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
--     animal_id NUMBER NOT NULL,
--     treatment_date DATE NOT NULL,
--     diagnosis varchar2(255) NOT NULL,
--     treatment_details varchar2(255) NOT NULL,
--     vet_id NUMBER,
--     next_checkup_date DATE,
--     CONSTRAINT fk_animal_med FOREIGN KEY (animal_id) REFERENCES Animals (animal_id) ON DELETE CASCADE,
--     CONSTRAINT fk_vet_med FOREIGN KEY (vet_id) REFERENCES Vet (vet_id) ON DELETE SET NULL
-- );

-- CREATE TABLE Donations (
--     donation_id NUMBER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
--     donor_name VARCHAR2(100) NOT NULL,
--     amount NUMBER(10, 2) NOT NULL CHECK (amount > 0),
--     donation_date DATE DEFAULT SYSDATE,
--     purpose varchar2(255)
-- );

--TRIGGERS

CREATE OR REPLACE TRIGGER update_animal_status_after_adoption
AFTER INSERT ON Adoptions
FOR EACH ROW
BEGIN
    UPDATE Animals
    SET status = 'Adopted'
    WHERE animal_id = :NEW.animal_id;
END;

-- CREATE OR REPLACE TRIGGER prevent_duplicate_adoption
-- BEFORE INSERT ON Adoptions
-- FOR EACH ROW
-- DECLARE
--     v_status VARCHAR2(20);
-- BEGIN
--     -- Check if the animal exists and retrieve its status
--     BEGIN
--         SELECT status INTO v_status
--         FROM Animals
--         WHERE animal_id = :NEW.animal_id;

--         -- If the animal is already adopted, raise an error
--         IF v_status = 'Adopted' THEN
--             RAISE_APPLICATION_ERROR(-20001, 'This animal is already adopted.');
--         END IF;

--     EXCEPTION
--         WHEN NO_DATA_FOUND THEN
--             -- Handle case where animal_id does not exist in Animals table
--             RAISE_APPLICATION_ERROR(-20002, 'Animal ID does not exist.');
--     END;
-- END;

-- CREATE OR REPLACE TRIGGER set_approval_date
-- BEFORE UPDATE ON Adoptions
-- FOR EACH ROW
-- BEGIN
--     IF :NEW.status = 'Approved' AND :OLD.status != 'Approved' THEN
--         :NEW.approval_date := SYSDATE;
--     END IF;
-- END;

-- CREATE OR REPLACE TRIGGER reset_animal_status_after_adoption_deletion
-- AFTER DELETE ON Adoptions
-- FOR EACH ROW
-- BEGIN
--     UPDATE Animals
--     SET status = 'Available'
--     WHERE animal_id = :OLD.animal_id;
-- END;

-- CREATE OR REPLACE TRIGGER validate_donation_amount
-- BEFORE INSERT OR UPDATE ON Donations
-- FOR EACH ROW
-- BEGIN
--     IF :NEW.amount <= 0 THEN
--         RAISE_APPLICATION_ERROR(-20002, 'Donation amount must be positive.');
--     END IF;
-- END;

-- CREATE OR REPLACE TRIGGER update_animal_health_status
-- AFTER INSERT ON MedicalRecords
-- FOR EACH ROW
-- BEGIN
--     UPDATE Animals
--     SET health_status = 'Updated medical record available'
--     WHERE animal_id = :NEW.animal_id;
-- END;

--VIEWS

CREATE OR REPLACE VIEW available_animals AS
SELECT 
    animal_id, name, species, breed, age, intake_date
FROM 
    Animals
WHERE 
    status = 'Available';

CREATE OR REPLACE VIEW recently_adopted_animals AS
SELECT 
    a.animal_id, a.name, a.species, a.breed, ad.adoption_date, ad.approval_date, ad.owner_id
FROM 
    Animals a
JOIN 
    Adoptions ad ON a.animal_id = ad.animal_id
WHERE 
    ad.adoption_date >= SYSDATE - 30;

-- CREATE OR REPLACE VIEW pending_adoptions AS
-- SELECT 
--     ad.adoption_id, an.name AS animal_name, adp.name AS owner_name, ad.status
-- FROM 
--     Adoptions ad
-- JOIN 
--     Animals an ON ad.animal_id = an.animal_id
-- JOIN 
--     Owners adp ON ad.owner_id = adp.owner_id
-- WHERE 
--     ad.status = 'Pending';

CREATE OR REPLACE VIEW animal_medical_history AS
SELECT 
    m.record_id, m.animal_id, a.name AS animal_name, m.treatment_date, m.diagnosis, m.treatment_details, v.name AS vet_name
FROM 
    MedicalRecords m
JOIN 
    Animals a ON m.animal_id = a.animal_id
LEFT JOIN 
    Vet v ON m.vet_id = v.vet_id;

-- CREATE OR REPLACE VIEW staff_responsibilities AS
-- SELECT 
--     s.staff_id, s.name AS staff_name, s.role, a.animal_id, a.name AS animal_name, r.responsibility_type
-- FROM 
--     Animal_Staff r
-- JOIN 
--     Staff s ON r.staff_id = s.staff_id
-- JOIN 
--     Animals a ON r.animal_id = a.animal_id;

-- CREATE OR REPLACE VIEW recent_donations AS
-- SELECT 
--     donor_name, amount, donation_date, purpose
-- FROM 
--     Donations
-- WHERE 
--     donation_date >= SYSDATE - 30;

-- CREATE OR REPLACE VIEW adoption_statistics AS
-- SELECT 
--     a.species, COUNT(ad.adoption_id) AS total_adoptions, 
--     SUM(CASE WHEN ad.status = 'Approved' THEN 1 ELSE 0 END) AS approved_adoptions,
--     SUM(CASE WHEN ad.status = 'Pending' THEN 1 ELSE 0 END) AS pending_adoptions
-- FROM 
--     Animals a
-- JOIN 
--     Adoptions ad ON a.animal_id = ad.animal_id
-- GROUP BY 
--     a.species;

-- CREATE OR REPLACE VIEW donor_contributions AS
-- SELECT 
--     donor_name, COUNT(donation_id) AS total_donations, SUM(amount) AS total_contributed
-- FROM 
--     Donations
-- GROUP BY 
--     donor_name;

--PROCEDURES

-- CREATE OR REPLACE PROCEDURE approve_adoption(p_adoption_id IN NUMBER)
-- AS
-- BEGIN
--     UPDATE Adoptions
--     SET status = 'Approved', approval_date = SYSDATE
--     WHERE adoption_id = p_adoption_id AND status = 'Pending';

--     -- Trigger will handle updating the animal's status to 'Adopted'
--     COMMIT;
-- END;

-- CREATE OR REPLACE PROCEDURE reject_adoption(p_adoption_id IN NUMBER, p_reason IN VARCHAR2)
-- AS
-- BEGIN
--     UPDATE Adoptions
--     SET status = 'Rejected', rejection_reason = p_reason
--     WHERE adoption_id = p_adoption_id AND status = 'Pending';

--     COMMIT;
-- END;

CREATE OR REPLACE PROCEDURE add_animal(
    p_name IN VARCHAR2,
    p_species IN VARCHAR2,
    p_breed IN VARCHAR2,
    p_age IN NUMBER,
    p_description IN varchar2,
    p_photo_url IN varchar2
)
AS
BEGIN
    INSERT INTO Animals (name, species, breed, age, description, photo_url)
    VALUES (p_name, p_species, p_breed, p_age, p_description, p_photo_url);

    COMMIT;
END;

-- CREATE OR REPLACE PROCEDURE add_donation(
--     p_donor_name IN VARCHAR2,
--     p_amount IN NUMBER,
--     p_purpose IN varchar2
-- )
-- AS
-- BEGIN
--     INSERT INTO Donations (donor_name, amount, donation_date, purpose)
--     VALUES (p_donor_name, p_amount, SYSDATE, p_purpose);

--     COMMIT;
-- END;

-- CREATE OR REPLACE PROCEDURE assign_staff_to_animal(
--     p_animal_id IN NUMBER,
--     p_staff_id IN NUMBER,
--     p_responsibility_type IN VARCHAR2
-- )
-- AS
-- BEGIN
--     INSERT INTO Animal_Staff (animal_id, staff_id, responsibility_type)
--     VALUES (p_animal_id, p_staff_id, p_responsibility_type);

--     COMMIT;
-- END;

CREATE OR REPLACE PROCEDURE update_medical_record(
    p_animal_id IN NUMBER,
    p_diagnosis IN varchar2,
    p_treatment_details IN varchar2,
    p_vet_id IN NUMBER,
    p_next_checkup_date IN DATE
)
AS
BEGIN
    INSERT INTO MedicalRecords (animal_id, treatment_date, diagnosis, treatment_details, vet_id, next_checkup_date)
    VALUES (p_animal_id, SYSDATE, p_diagnosis, p_treatment_details, p_vet_id, p_next_checkup_date);

    COMMIT;
END;

CREATE OR REPLACE PROCEDURE generate_adoption_report(
    p_start_date IN DATE,
    p_end_date IN DATE,
    output_cursor OUT SYS_REFCURSOR
)
AS
BEGIN
    OPEN output_cursor FOR
    SELECT 
        a.adoption_id, 
        an.name AS animal_name, 
        ad.name AS owner_name, 
        a.status, 
        a.adoption_date
    FROM 
        Adoptions a
    JOIN 
        Animals an ON a.animal_id = an.animal_id
    JOIN 
        Owners ad ON a.owner_id = ad.owner_id
    WHERE 
        a.adoption_date BETWEEN p_start_date AND p_end_date;
END;
