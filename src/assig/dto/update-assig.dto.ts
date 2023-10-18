import { PartialType } from '@nestjs/mapped-types';
import { CreateAssigDto } from './create-assig.dto';

export class UpdateAssigDto extends PartialType(CreateAssigDto) {}
