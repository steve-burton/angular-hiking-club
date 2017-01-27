import { Component, Input, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css'],
  providers: [MemberService]
})
export class EditMemberComponent implements OnInit {
  @Input() selectedMember;

  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

  updateMember(memberToUpdate) {
    this.memberService.updateMember(memberToUpdate);
  }

  deleteMember(memberToDelete) {
    if(confirm("Are you sure you want to delete this member?")) {
      this.memberService.deleteMember(memberToDelete);
    }
  }

}
