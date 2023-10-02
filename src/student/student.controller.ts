/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Controller,
  Post,
  Put,
  Param,
  Res,
  Header,
  HttpStatus,
  Delete,
  Get,
  Body,
} from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from 'src/dto/create-student.dto';
import { UpdateStudentDto } from 'src/dto/update-student.dto';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}
  @Post()
  async createStudent(
    @Res() response,
    @Body() createStudentDto: CreateStudentDto,
  ) {
    try {
      const newStudent =
        await this.studentService.createStudent(createStudentDto);
      return response
        .status(HttpStatus.CREATED)
        .json({ message: 'Student has been created successfully', newStudent });
    } catch {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error Student not created',
        error: 'Bad Request',
      });
    }
  }

  @Get()
  async getStudent(@Res() response) {
    try {
      const studentData = await this.studentService.getAllStudent();
      return response.status(HttpStatus.OK).json({
        message: 'Get all student',
        studentData,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Put('/:id')
  async updateStudent(
    @Res() response,
    @Param('id') studentId: string,
    @Body() updateStudentDto: UpdateStudentDto,
  ) {
    try {
      const existingStudent = await this.studentService.updateStudent(
        studentId,
        updateStudentDto,
      );
      return response.status(HttpStatus.OK).json({
        message: 'Student Detail updated',
        existingStudent,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Delete('/:id')
  async deleteStudent(@Res() response, @Param('id') studentId: string) {
    try {
      const deleteStudent = await this.studentService.deleteStudent(studentId);
      return response.status(HttpStatus.OK).json({
        message: 'Student deleted',
        deleteStudent,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
}
