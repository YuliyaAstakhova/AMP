import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseComponent } from './course.component';
import { ButtonModule } from 'app/ui/button/button.module';

describe('CourseComponent', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;
  let compiled;
  let courseMock;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseComponent ],
      imports: [ ButtonModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
    courseMock = {
      id: 'id2',
      title: 'title2',
      creationDate: new Date(),
      duration: 2,
      description: 'description2',
    },
    component.course = courseMock;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    expect(compiled.querySelector('.course__title').textContent).toEqual(courseMock.title);
  });

  it('should render title', () => {
    expect(compiled.querySelector('.course__title').textContent).toEqual(courseMock.title);
  })
  it('should render duration', () => {
    expect(compiled.querySelector('.course__duration').textContent).toEqual(courseMock.duration.toString());
  })
  it('should render creationDate', () => {
    expect(compiled.querySelector('.course__date').textContent).toEqual(courseMock.creationDate.toString());
  })
  it('should render description', () => {
    expect(compiled.querySelector('.course__description').textContent).toEqual(courseMock.description);
  })


  describe('class CourseComponent', () => {
    let componentClassInstance;

    beforeEach(() => {
      componentClassInstance = new CourseComponent();
      componentClassInstance.course = courseMock;
    });

    it('should call onCourseDelete calback', () => {
      componentClassInstance.onCourseDelete.subscribe((course) => expect(course).toBe(courseMock));
      componentClassInstance.delete();
    })
  })
});
