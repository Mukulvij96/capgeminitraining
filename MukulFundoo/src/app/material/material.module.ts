import { NgModule } from  '@angular/core';
import {MatNativeDateModule,MatDatepickerModule,MatIconModule,MatButtonModule,MatCheckboxModule, MatToolbarModule, MatCardModule,MatFormFieldModule,MatInputModule,MatRadioModule,MatListModule, MatSidenavModule, MatExpansionModule, MatTooltipModule, MatGridListModule, MatMenuModule, MatDialogModule,MatTabsModule} from  '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {A11yModule} from '@angular/cdk/a11y';
import {BidiModule} from '@angular/cdk/bidi';
import {ObserversModule} from '@angular/cdk/observers';
import {OverlayModule} from '@angular/cdk/overlay';
import {PlatformModule} from '@angular/cdk/platform';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';


@NgModule({
imports: [MatNativeDateModule,MatDatepickerModule,MatIconModule,MatButtonModule,MatCheckboxModule, MatToolbarModule,FormsModule, MatCardModule,MatFormFieldModule,MatInputModule,MatListModule,MatRadioModule,A11yModule,MatSidenavModule,
    BidiModule,
    ObserversModule,
    OverlayModule,
    PlatformModule,
    PortalModule,
    ScrollDispatchModule,
    CdkStepperModule,
    CdkTableModule,
MatExpansionModule,
MatTooltipModule,
MatGridListModule,
MatMenuModule,MatButtonModule,
MatDialogModule,MatTabsModule,MatButtonModule
],
 
exports: [MatNativeDateModule,FormsModule,ReactiveFormsModule,
MatDatepickerModule,MatIconModule,MatButtonModule,MatCheckboxModule, MatToolbarModule, MatCardModule,MatFormFieldModule,MatInputModule,MatListModule,MatRadioModule,MatSidenavModule,BidiModule,
ObserversModule,
OverlayModule,
PlatformModule,
PortalModule,
ScrollDispatchModule,
CdkStepperModule,
CdkTableModule,
MatExpansionModule,
MatTooltipModule,
MatGridListModule,MatMenuModule,
MatButtonModule,MatDialogModule,
MatTabsModule,MatButtonModule
],
 
})
 
export class MyMaterialModule { }