import { ClickOutsideDirective } from './click-outside.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
class TestComponent {
  clickOutside(): void{}
}

describe('ClickOutsideDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;


  beforeEach(async () => {
      await TestBed.configureTestingModule({
          declarations: [ClickOutsideDirective, TestComponent],
      }).compileComponents();

      fixture = TestBed.createComponent(TestComponent);
      component = fixture.componentInstance;
  });

  it('should create directive', () => {
      fixture.detectChanges();

      expect(component).toBeTruthy();
  });

  it('should trigger click inside', () => {
      spyOn(component, 'clickOutside');    
      fixture.detectChanges();

      const inside = fixture.debugElement.query(By.css('.inside')).nativeElement;
      inside.click();

      expect(component.clickOutside).not.toHaveBeenCalled();
  });

  it('should trigger click outside', () => {
      spyOn(component, 'clickOutside');
      fixture.detectChanges();

      const outside = fixture.debugElement.query(By.css('.outside')).nativeElement;
      outside.click();

      expect(component.clickOutside).toHaveBeenCalled();
  });
});
