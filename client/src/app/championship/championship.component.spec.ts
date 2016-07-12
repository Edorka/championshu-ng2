/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ChampionshipComponent } from './championship.component';

describe('Component: Championship', () => {
  it('should create an instance', () => {
    let component = new ChampionshipComponent();
    expect(component).toBeTruthy();
  });
});
