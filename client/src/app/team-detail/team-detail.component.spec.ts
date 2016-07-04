/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { TeamDetailComponent } from './team-detail.component';

describe('Component: TeamDetail', () => {
  it('should create an instance', () => {
    let component = new TeamDetailComponent();
    expect(component).toBeTruthy();
  });
});
