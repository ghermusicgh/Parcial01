import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({ description: 'The Email of the User'})
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'The Password of the User'})
  password: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'The Name of the User'})
  readonly name: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'The Lastname of the User'})
  readonly lastname?: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'The Identification of the User'})
  readonly identification?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'The Picture of the User'})
  readonly picture?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'The Phone of the User'})
  readonly phone?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'The Gender of the User'})
  readonly gender?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'The Birthday of the User'})
  readonly birthday?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'The Country of the User'})
  readonly country?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'The State of the User'})
  readonly state?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'The City of the User'})
  readonly city?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'The Address of the User'})
  readonly address?: string;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({ description: 'The User is active?'})
  readonly active?: boolean;
}
