-- check everything
select * from user_triggers;
select * from user_views;
select * from user_tables;
select * from user_objects;
select * from user_sequences;

-- reset everything
BEGIN
   -- Drop all triggers
   FOR trg IN (SELECT trigger_name FROM user_triggers) LOOP
      EXECUTE IMMEDIATE 'DROP TRIGGER ' || trg.trigger_name;
   END LOOP;

   -- Drop all tables
   FOR tbl IN (SELECT table_name FROM user_tables) LOOP
      EXECUTE IMMEDIATE 'DROP TABLE ' || tbl.table_name || ' CASCADE CONSTRAINTS';
   END LOOP;

   -- Drop all views
   FOR vw IN (SELECT view_name FROM user_views) LOOP
      EXECUTE IMMEDIATE 'DROP VIEW ' || vw.view_name;
   END LOOP;

   -- Drop all sequences
   FOR seq IN (SELECT sequence_name FROM user_sequences) LOOP
      EXECUTE IMMEDIATE 'DROP SEQUENCE ' || seq.sequence_name;
   END LOOP;

   -- Drop all procedures, functions, and packages
   FOR obj IN (SELECT object_name, object_type 
               FROM user_objects 
               WHERE object_type IN ('PROCEDURE', 'FUNCTION', 'PACKAGE')) LOOP
      EXECUTE IMMEDIATE 'DROP ' || obj.object_type || ' ' || obj.object_name;
   END LOOP;
END;
/

