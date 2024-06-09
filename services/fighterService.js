import { fighterRepository } from "../repositories/fighterRepository.js";

class FighterService {
  // TODO: Implement methods to work with fighters
  searchById(id) {
    const item = fighterRepository.getOne({ id });
    if (!item) {
      return null;
    }
    return item;
  }

  getAllFighters() {
    return fighterRepository.getAll();
  }

  createFighter(data) {
    let checkedData;
    try {
      checkedData = this.checkAllData(data);
    } catch (error) {
      //handled by response middleware
      throw error;
    }

    try {
      const newUser = new UserEntity(userRepository.create(checkedData));
      return newUser.returnUnidentified();
    } catch (error) {
      //search and then delete the posible previous created because of unexpected error!
      const rollbackCreated = this.search({ phoneNumber: data.phoneNumber });
      if (rollbackCreated) {
        userRepository.delete(rollbackCreated.id);
      }
      throw new CustomError(
        MESSAGES.USER_MESSAGES.UNEXPECTED_ERROR_CREATING,
        500
      );
    }
  }
}

const fighterService = new FighterService();

export { fighterService };
