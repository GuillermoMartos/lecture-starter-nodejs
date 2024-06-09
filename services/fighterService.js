import { fighterRepository } from "../repositories/fighterRepository.js";

class FighterService {
  // TODO: Implement methods to work with fighters
  searchById(id) {
    const item = fighterRepository.getOne(id);
    if (!item) {
      return null;
    }
    return item;
  }

  getAllFighters() {
    return fighterRepository.getAll();
  }

  createFighter(data) {
    try {
      const newFighter = fighterRepository.create({ ...data });
      return newFighter;
    } catch (error) {
      throw new CustomError(
        MESSAGES.USER_MESSAGES.UNEXPECTED_ERROR_CREATING,
        500
      );
    }
  }
}

const fighterService = new FighterService();

export { fighterService };
