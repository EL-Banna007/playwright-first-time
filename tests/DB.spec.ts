import { Pool } from 'pg';
import { test, expect } from '@playwright/test';

test('Database implementation', async ({ }) => {

    const connection = new Pool({
        user: 'postgres',
        password: '01001834577',
        host: 'localhost',
        port: 5432,
        database: 'playwright'
    });
    const getAllHospitalMembers = await connection.query('SELECT * FROM "hospital_memper"');
    const getAllDoctorsData = await connection.query('SELECT * FROM "doctor"');
    const secondDoctorData = JSON.stringify(getAllDoctorsData.rows[1]);
    const secondDoctorSalary = JSON.stringify(getAllDoctorsData.rows[1]["doctor_salary"]);
    const secondDoctorId = JSON.stringify(getAllDoctorsData.rows[1].id);


    console.log(`The Command Used iS 
    ${getAllHospitalMembers.command}`)
    console.log('-------------------------------------------------');
    console.log(`The Row Count Is
     ${getAllHospitalMembers.rowCount}`);
    console.log('-------------------------------------------------');
    console.log(`The Query Result Is 
    ${JSON.stringify(getAllHospitalMembers.rows)}`);
    console.log('-------------------------------------------------');
    console.log(`The Second Doctor Data is
     ${secondDoctorData}`);
    console.log('-------------------------------------------------');
    console.log(`The Second Doctor Salary is
     ${secondDoctorSalary}`)
       console.log('-------------------------------------------------');
    console.log(`The Second Doctor ID is
     ${secondDoctorId}`)


     expect(secondDoctorSalary).toBe("9999.99");
    expect(secondDoctorId).toBe('2');



})