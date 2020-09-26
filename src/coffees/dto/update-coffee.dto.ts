import { PartialType } from '@nestjs/mapped-types';
import { CreateCoffeeDto } from './create-coffee.dto';

// PartialType inherits the attribnutes from the passed and and mark them as optional
export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}
