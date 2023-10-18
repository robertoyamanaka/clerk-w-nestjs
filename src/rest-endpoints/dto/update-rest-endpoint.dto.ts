import { PartialType } from '@nestjs/mapped-types';
import { CreateRestEndpointDto } from './create-rest-endpoint.dto';

export class UpdateRestEndpointDto extends PartialType(CreateRestEndpointDto) {}
