import http from '../utils/http-common';

class TutorialDataService {
  create() {
    const data = {
      title: 'La ferchu',
      description: 'hermosa',
      published: false,
    }

    return http.post("/tutorials", data);
  }
}

export default new TutorialDataService();