import { api, LightningElement } from 'lwc';

export default class StudentTiles extends LightningElement {
    @api studentList = [];

    selectedStudentId = '';

    handleStudentSelected(event) {
        this.selectedStudentId = event.detail.studentId;
    }

    @api setSelectedStudent(studentId) {
        this.selectedStudentId = studentId;
    }
}