import { Component, Input} from '@angular/core';
import { Member } from '../../_models/member';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrl: './member-card.component.css'
})
export class MemberCardComponent{
  @Input() member: Member | undefined;

}