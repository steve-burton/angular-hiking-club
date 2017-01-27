import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Member } from '../member.model';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {


  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private memberService: MemberService) { }

  ngOnInit() {
    this.route.params.forEach((urlParametersArray) => {
      this.memberId = urlParametersArray['id'];
    });
    this.memberToDisplay = this.memberService.getMemberById(this.memberId);
  }
}
