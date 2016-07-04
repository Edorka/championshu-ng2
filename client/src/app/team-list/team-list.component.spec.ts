/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { TeamListComponent } from './team-list.component';

describe('Component: TeamList', () => {
  it('should create an instance', () => {
    let component = new TeamListComponent();
    expect(component).toBeTruthy();
  });
});
