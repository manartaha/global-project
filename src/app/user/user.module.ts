import { NgModule } from '@angular/core';
import { UserService } from './user.service';
import { UserComponent } from './user.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [FormsModule
  ],
  declarations: [UserComponent],
  exports: [UserComponent],
  providers: [UserService]
})
export class UserModule { }
