select * from animals;
truncate table animals;
SELECT * from available_animals;

select * from owners;

select * from adoption_applications;

update adoption_applications set status = 'Approved' where owner_id = 1;

select * from staff;
truncate table staff;
commit;
-- 
select * from vets;
insert into owners (name, email, password) values ('John Doe', 'idk', 'password');
select * from medicalrecords;

--List all animals that are available for adoption:
SELECT animal_id, name, species, breed, age, health_status, vaccination_status
FROM Animals
WHERE status = 'Available';

 --Join the Adoptions, Owners, and Animals tables to get details of adoptions:
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
    Owners ad ON a.owner_id = ad.owner_id;

--Show the medical history of an animal by its ID:
SELECT 
    m.record_id, 
    a.name AS animal_name, 
    m.treatment_date, 
    m.diagnosis, 
    m.treatment_details, 
    v.name AS vet_name
FROM 
    MedicalRecords m
JOIN 
    Animals a ON m.animal_id = a.animal_id
LEFT JOIN 
    Vet v ON m.vet_id = v.vet_id
WHERE 
    m.animal_id = 1; -- Replace 1 with the desired animal_id

--Get the total number of donations and the average amount:
SELECT 
    COUNT(*) AS total_donations, 
    AVG(amount) AS average_donation
FROM 
    Donations;

--Show which staff members are responsible for which animals:
SELECT 
    s.name AS staff_name, 
    s.role, 
    a.name AS animal_name, 
    r.responsibility_type
FROM 
    Animal_Staff r
JOIN 
    Staff s ON r.staff_id = s.staff_id
JOIN 
    Animals a ON r.animal_id = a.animal_id;

--Summarize the total donations by each donor:
SELECT 
    donor_name, 
    SUM(amount) AS total_donated, 
    COUNT(donation_id) AS donation_count
FROM 
    Donations
GROUP BY 
    donor_name;

--List all vets and their areas of specialization:
SELECT 
    vet_id, 
    name AS vet_name, 
    specialization, 
    available_hours
FROM 
    Vet;

--Retrieve animals managed by a particular staff member:
SELECT 
    a.name AS animal_name, 
    r.responsibility_type
FROM 
    Animal_Staff r
JOIN 
    Animals a ON r.animal_id = a.animal_id
WHERE 
    r.staff_id = 1; -- Replace 1 with the desired staff_id
