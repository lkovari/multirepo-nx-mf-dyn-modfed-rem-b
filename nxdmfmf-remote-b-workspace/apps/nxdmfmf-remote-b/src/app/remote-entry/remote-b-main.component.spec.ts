import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RemoteBMainComponent } from './remote-b-main.component';

describe('RemoteBMainComponent', () => {
  let fixture: ComponentFixture<RemoteBMainComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemoteBMainComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RemoteBMainComponent);
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('should render the title', () => {
    const title = compiled.querySelector('.c-remote-entry__title');
    expect(title?.textContent?.trim()).toBe(
      'Angular Nx (multi-repo) Micro-frontend App'
    );
  });

  it('should render the source description', () => {
    const source = compiled.querySelector('.c-remote-entry__source');
    expect(source?.textContent).toContain(
      'This page is loaded from repo: multirepo-nx-mf-dyn-modfed-rem-b'
    );
    expect(source?.textContent).toContain('nxdmfmf-remoce-b-workspace');
    expect(source?.textContent).toContain('nxdmfmf-remote-b');
  });

  it('should render the three card sections', () => {
    const cards = compiled.querySelectorAll('.c-remote-entry__card');
    expect(cards.length).toBe(3);
  });
});
