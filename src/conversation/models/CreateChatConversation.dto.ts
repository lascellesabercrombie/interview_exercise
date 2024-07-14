import { ApiProperty } from '@nestjs/swagger';
import { Permission } from './Permission.dto';
import { Product, Context } from './ContextSchema.dto';
import { ObjectType, InputType, registerEnumType } from '@nestjs/graphql';
import { Field } from '@nestjs/graphql';

export enum TagType {
  subTopic = 'subTopic',
}

registerEnumType(TagType, {
  name: 'TagType',
});

@ObjectType()
@InputType('TagInput')
export class Tag {
  @Field()
  @ApiProperty({ type: String })
  id: string;

  @Field(() => TagType)
  @ApiProperty({ enum: TagType })
  type: TagType;
}

export class CreateChatConversationDto {
  @ApiProperty()
  product: Product;

  @ApiProperty({ type: [Context] })
  context: Context[];

  @ApiProperty({ type: [Permission], required: false, default: [] })
  permissions?: Permission[];

  @ApiProperty({ type: [Tag], required: false })
  tags?: Tag[];

  @ApiProperty({ type: [String], required: false })
  memberIds?: string[];

  @ApiProperty({ type: [String], required: false })
  blockedMemberIds?: string[];
}
