import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { RequirementsRoutingModule } from './requirements-routing.module';
import { RequirementsComponent } from './requirements.component';
import { ListComponent } from './container/list/list.component';
import { CreateComponent } from './container/create/create.component';
import { requirementReducer } from './state/requirment.reducer';
import { RequirementEffects } from './state/requirement.efffects';

@NgModule({
  declarations: [RequirementsComponent, ListComponent, CreateComponent],
  imports: [
    CommonModule,
    RequirementsRoutingModule,
    StoreModule.forFeature('requirement', requirementReducer),
    EffectsModule.forFeature([RequirementEffects]),
  ],
})
export class RequirementsModule {}
