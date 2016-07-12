/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ChampionshipGreetingComponent } from './championship-greeting.component';

describe('Component: ChampionshipGreeting', () => {
  it('should create an instance', () => {
    let component = new ChampionshipGreetingComponent();
    expect(component).toBeTruthy();
  });
});
