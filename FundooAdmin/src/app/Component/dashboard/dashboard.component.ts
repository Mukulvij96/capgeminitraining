import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  users: any[];
  countBasic: any;
  countAdvance: any;
  basicUsers: any[];
  advanceUsers:any[];
  constructor() { }

  ngOnInit() {
    this.search();
    // this.getUsers();
  }


  getUsers() {
    // $('#basicData').append('');
    // $('#advanceData').append('');
    $.ajax({
      url: "http://fundoonotes.incubation.bridgelabz.com/api/user/getAdminUserList",
      type: 'GET',
      success: (response) => {
        console.log("UserList", response);
        this.users = response.data.data;
        var users_data = "";
        $.each(this.users, (key, value) => {
          users_data += '<tr>';
          users_data += '<td>' + value.firstName + '</td>';
          users_data += '<td>' + value.lastName + '</td>';
          users_data += '<td>' + value.email + '</td>';
          users_data += '<td>' + value.service + '</td>';
          users_data += '</tr>'
        });
        // console.log(users_data);
        $('#usersTable').append(users_data);

        this.countBasic = this.users.filter(function (check) {
          return check.service == ('basic') || check.service == ('Basic')
        }).length;
        console.log(this.countBasic)
        $('#basicData').html(this.countBasic);

        this.countAdvance = this.users.filter(function (check) {
          return check.service == ('advance')
        }).length;
        console.log(this.countAdvance);
        $('#advanceData').html(this.countAdvance);
      }
    })
  }
  search() {
    $("#myInput").on("keyup", function () {
      var value = $(this).val().toLowerCase();
      console.log(value)
      $("#usersTable tr").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  }

  getBasicUsers() {
    var basic_users_data = ""
    this.basicUsers = this.users.filter(function (check) {
      return check.service == ('basic') || check.service == ('Basic')
    });
    //  console.log("Basic Users" , this.basicUsers)
    $.each(this.basicUsers, (key, value) => {
      basic_users_data += '<tr>';
      basic_users_data += '<td>' + value.firstName + '</td>';
      basic_users_data += '<td>' + value.lastName + '</td>';
      basic_users_data += '<td>' + value.email + '</td>';
      basic_users_data += '<td>' + value.service + '</td>';
      basic_users_data += '</tr>'
    })
    console.log(basic_users_data)
    $('#usersTable').html(basic_users_data);
  }

  getAdvanceUsers() {
    var advance_users_data = ""
    this.advanceUsers = this.users.filter(function (check) {
      return check.service == ('advance') || check.service == ('Advance')
    });
    //  console.log("Basic Users" , this.basicUsers)
    $.each(this.advanceUsers, (key, value) => {
      advance_users_data += '<tr>';
      advance_users_data += '<td>' + value.firstName + '</td>';
      advance_users_data += '<td>' + value.lastName + '</td>';
      advance_users_data += '<td>' + value.email + '</td>';
      advance_users_data += '<td>' + value.service + '</td>';
      advance_users_data += '</tr>'
    })
    console.log(advance_users_data)
    $('#usersTable').html(advance_users_data);
  }
}
