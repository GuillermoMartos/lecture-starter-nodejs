import { MESSAGES } from "../constants/response.messages.js";
import { fighterRepository } from "../repositories/fighterRepository.js";
import { CustomError } from "../types/CustomError.js";

class FighterService {
  // TODO: Implement methods to work with fighters
  searchById(id) {
    const item = fighterRepository.getOne(id);
    if (!item) {
      return null;
    }
    return item;
  }

  deleteFighterById(id) {
    const item = fighterRepository.delete(id);
    if (item.length === 0) {
      throw new CustomError(
        MESSAGES.FIGHTER_MESSAGES.ERROR_FIGHTER_DELETE_NOT_FOUND,
        404
      );
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
        MESSAGES.FIGHTER_MESSAGES.UNEXPECTED_FIGHTER_CREATING,
        500
      );
    }
  }
}

const fighterService = new FighterService();

export { fighterService };
