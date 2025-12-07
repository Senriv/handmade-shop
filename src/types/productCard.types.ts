type Attributes = {
  attributeName: string;
  attributeValue: string;
};

type UiAttribute = {
  name: string;
  value: string;
};

type productColors = {
  variantId: number;
  colorHex: string;
};

export interface ProductCardDTO {
  attributes: Attributes[];
  availability: boolean;
  category: string;
  discountPrice: null | number;
  discrittion: string;
  id: number;
  imgUrls: string[];
  materials: string[];
  name: string;
  price: number;
  productVarColors: productColors[];
  shortDiscrittion: string;
}

export interface ProductCardUi {
  id: number;
  title: string;
  description: string;
  shortDescription: string;
  price: number;
  discountPrice: number | null;
  isAvailable: boolean;
  category: string;
  image: string[];
  materials: string[];
  attributes: UiAttribute[];
}

export const mapProductDtoToUi = (dto: ProductCardDTO): ProductCardUi => ({
  id: dto.id,
  title: dto.name,
  description: dto.discrittion,
  shortDescription: dto.shortDiscrittion,
  price: dto.price,
  discountPrice: dto.discountPrice,
  isAvailable: dto.availability,
  category: dto.category,
  image: dto.imgUrls.map((a) => a),
  materials: dto.materials,
  attributes: dto.attributes.map((a) => ({
    name: a.attributeName,
    value: a.attributeValue,
  })),
});
