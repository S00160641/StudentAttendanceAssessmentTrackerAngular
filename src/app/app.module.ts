import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { AssessmentScheduleComponent } from './assessment-schedule/assessment-schedule.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AttendanceRecordComponent } from './attendance-record/attendance-record.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'attendance', component: AttendanceComponent },
  { path: 'assessments', component: AssessmentScheduleComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    AttendanceComponent,
    AssessmentScheduleComponent,
    LoginComponent,
    RegisterComponent,
    AttendanceRecordComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
