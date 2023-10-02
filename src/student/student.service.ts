/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateStudentDto } from 'src/dto/create-student.dto';
import { UpdateStudentDto } from 'src/dto/update-student.dto';
import { IStudent } from 'src/interface/student.interface';

@Injectable()
export class StudentService {
    constructor(@InjectModel('student') private studentModel:Model<IStudent>){}
    //Create student inside mongoo db
    async createStudent(createStudentDto: CreateStudentDto): Promise<IStudent>{
        const newStudent = await new this.studentModel(createStudentDto);
        return newStudent.save();
    }

    //Reading all the student from mongoo db
    async getAllStudent():Promise<IStudent[]>{
        const studentData = await this.studentModel.find();
        if(!studentData || studentData.length == 0){
            throw new NotFoundException('Student data not found');
        }
        return studentData;
   }

   //Get Single record from db

   async getStudent(studentId: number):Promise<IStudent>{
        const existingStudent = await this.studentModel.findById(studentId);
        if(!existingStudent){
            throw new NotFoundException('Student not found');
        }
        return existingStudent;
   }

   // Delete a student

   async deleteStudent(studentId: string): Promise<IStudent> {
    const deleteStudent = await this.studentModel.findByIdAndDelete(studentId);
    if(!deleteStudent){
        throw new NotFoundException(`Student ${studentId} not found`);
    }
    return deleteStudent;
   }

   //Update student by Id
   async updateStudent(studentId: string, updateStudent: UpdateStudentDto): Promise<IStudent>{
    const existingStudent = this.studentModel.findByIdAndUpdate(studentId, updateStudent, {new: true});
    if(!existingStudent){
        throw new NotFoundException(`Student ${studentId} not found`);
    }
    return existingStudent;
   }
}
 