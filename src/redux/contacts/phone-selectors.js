import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.contacts.loading;

const getFilter = state => state.contacts.filter;

const arrayContact = state => state.contacts;

const contactSelectors = {
  getLoading,
  getFilter,
  arrayContact,
};
export default contactSelectors;