import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageContentComponent } from './page-content/page-content.component';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, PageContentComponent],
  imports: [
    CommonModule,
  ],
  exports: [FooterComponent, HeaderComponent, PageContentComponent],
})
export class SharedModule { }
