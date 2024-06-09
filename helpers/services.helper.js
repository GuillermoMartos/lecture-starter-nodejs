export function castValuesToNumber(value) {
  try {
    return +value;
  } catch (error) {
    throw new CustomError(
      `${MESSAGES.ERROR_NUMBER_TYPE_DATA_CAST} ${value}`,
      400
    );
  }
}
