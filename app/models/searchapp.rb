class Searchapp < ActiveRecord::Base
  has_many :assets
  attr_accessible :content, :file_name, :tag_list
  attr_accessible :assets_attributes
  accepts_nested_attributes_for :assets, :allow_destroy=> true
  validates :content, :file_name , presence: :true

  has_many :taggings
has_many :tags, through: :taggings

def self.tagged_with(name)
  Tag.find_by_name!(name).searchapps
end

def self.tag_counts
  Tag.select("tags.*, count(taggings.tag_id) as count").
    joins(:taggings).group("taggings.tag_id")
end

def tag_list
  tags.map(&:name).join(", ")
end

def tag_list=(names)
  self.tags = names.split(",").map do |n|
    Tag.where(name: n.strip).first_or_create!
  end
end


end

