import { IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto { 
    @ApiProperty({
        description: 'Title of the category',
        example: 'Electronics',
    })
    @IsNotEmpty({message:'title can not be empty'})
    @IsString({message:'title should be string.'})
    title: string;

    @ApiProperty({
        description: 'Description of the category',
        example: 'Category for electronic products',
    })
    @IsNotEmpty({message:'description can not be empty'})
    @IsString({message:'description should not be empty'})
    description: string;
}
