import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IsNotEmpty, IsString } from "class-validator";

@Schema()
export class User extends Document {
  @Prop({
    required: true,
    unique: true,
  })
  @IsString()
  @IsNotEmpty()
  email: string;
  
  @Prop({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  password: string;
  
  @Prop({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  readonly readOnlyData: {
    id: string;
    email: string;
    name: string;
    user_status: string;
  }
}

export const UserSchema = SchemaFactory.createForClass(User);