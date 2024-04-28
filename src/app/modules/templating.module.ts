import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InterpolationAccoladeComponent } from '../pages/lessons/templating/interpolation-accolade/interpolation-accolade.component';
import { LiaisonEvenementParentheseComponent } from '../pages/lessons/templating/liaison-evenement-parenthese/liaison-evenement-parenthese.component';
import { LiaisonProprieteCrochetComponent } from '../pages/lessons/templating/liaison-propriete-crochet/liaison-propriete-crochet.component';
import { TemplatingComponent } from '../pages/lessons/templating/templating.component';

@NgModule({
  declarations: [
    TemplatingComponent,
    InterpolationAccoladeComponent,
    LiaisonProprieteCrochetComponent,
    LiaisonEvenementParentheseComponent,
  ],
  imports: [CommonModule],
  exports: [
    TemplatingComponent,
    InterpolationAccoladeComponent,
    LiaisonProprieteCrochetComponent,
    LiaisonEvenementParentheseComponent,
  ],
})
export class TemplatingModule {}
