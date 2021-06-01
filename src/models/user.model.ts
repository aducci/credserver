import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class User extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  username: string;

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @property({
    type: 'date',
    required: true,
  })
  dateadded: string;

  @property({
    type: 'string',
    required: true,
  })
  state: string;

  @property({
    type: 'string',
  })
  email?: string;

  @property({
    type: 'string',
  })
  mobile?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
