import { Component, Input} from '@angular/core';
import { Member } from '../../_models/member';
import { ViewEncapsulation } from '@angular/core';
import { MembersService } from '../../_services/members.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrl: './member-card.component.css'
})
export class MemberCardComponent{
  @Input() member: Member | undefined;

  constructor(private memberService: MembersService, private  toastr: ToastrService){}

  addLike(member: Member){
    this.memberService.addLike(member.userName).subscribe({
      next: () => this.toastr.success('You have liked ' + member.knownAs)
    })
  }

}