BEGIN
   FOR obj IN (SELECT object_name, object_type 
               FROM all_objects 
               WHERE owner = 'c##db_project_subata' AND object_type IN ('TABLE', 'VIEW', 'SEQUENCE', 'TRIGGER', 'PROCEDURE', 'FUNCTION', 'PACKAGE')) LOOP
      EXECUTE IMMEDIATE 'DROP ' || obj.object_type || ' ' || 'c##db_project_subata.' || obj.object_name || ' CASCADE CONSTRAINTS';
   END LOOP;
END;
/
