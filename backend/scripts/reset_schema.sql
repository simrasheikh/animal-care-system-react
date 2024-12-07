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

END;
/

