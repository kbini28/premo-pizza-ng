import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  currentEmployee: Employee = {
    employeeId: null,
    name: '',
    status: false
  };
  message = '';
  updated = false;


  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getEmployee(this.route.snapshot.paramMap.get('id'));
  }

  getEmployee(id: string): void {
    this.employeeService.get(id)
      .subscribe(
        data => {
          this.currentEmployee = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateStatus(status: boolean): void {
    const data = {
      name: this.currentEmployee.name,
      status: status
    };

    this.employeeService.update(this.currentEmployee.employeeId, data)
      .subscribe(
        response => {
          this.currentEmployee.status = status;
          console.log(response);
          this.message = response.message;
        },
        error => {
          console.log(error);
        });
  }

  updateEmployee(): void {
    this.updated = true;
    this.employeeService.update(this.currentEmployee.employeeId, this.currentEmployee)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message;
        },
        error => {
          console.log(error);
        });
  }

  deleteEmployee(): void {
    this.employeeService.delete(this.currentEmployee.employeeId)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/employees']);
        },
        error => {
          console.log(error);
        });
  }
}
