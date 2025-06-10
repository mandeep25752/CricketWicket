/* eslint-disable prettier/prettier */
import ApiClient from '../commons/ApiClient';

const MatchesListService = {
  matchesList: () => ApiClient.get('/matches/list'),
};

export default MatchesListService;
