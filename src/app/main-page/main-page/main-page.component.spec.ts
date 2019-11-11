import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageComponent } from './main-page.component';
import { CourseComponent } from '../course/course.component';
import { CourseListComponent } from '../course-list/course-list.component';
import { SearchComponent } from '../course-list/search/search.component';
import { BreadcrumbsModule } from 'app/breadcrumbs/breadcrumbs.module';
import { FormsModule } from '@angular/forms';
import { HeaderModule } from 'app/header/header.module';
import { FooterModule } from 'app/footer/footer.module';
import { ContainerModule } from 'app/container/container.module';
import { ButtonModule } from 'app/ui/button/button.module';

describe('MainPageComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;
  let compiled;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPageComponent, CourseComponent, CourseListComponent, SearchComponent ],
      imports: [ BreadcrumbsModule, FormsModule, HeaderModule, FooterModule, ContainerModule, ButtonModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render header', () => {
    expect(compiled.querySelector('app-header')).not.toBe(null);
  });
  it('should render container', () => {
    expect(compiled.querySelector('app-container')).not.toBe(null);
  });
  it('should render breadcrumbs', () => {
    expect(compiled.querySelector('app-breadcrumbs')).not.toBe(null);
  });
  it('should render course-list', () => {
    expect(compiled.querySelector('app-course-list')).not.toBe(null);
  });
});
