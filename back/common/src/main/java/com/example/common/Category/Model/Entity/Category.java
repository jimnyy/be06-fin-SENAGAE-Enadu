package com.example.common.Category.Model.Entity;

import jakarta.persistence.*;
import lombok.*;

import com.example.common.ErrorArchive.Model.Entity.ErrorArchive;
import com.example.common.Wiki.Model.Entity.Wiki;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String categoryName;

    @ManyToOne
    @JoinColumn(name = "super_category_id", nullable = true)
    private Category superCategory;

    @OneToMany(mappedBy = "superCategory", cascade = CascadeType.ALL)
    private List<Category> subCategories = new ArrayList<>();

    @OneToMany(mappedBy = "category")
    private List<Wiki>  wikiList = new ArrayList<>();

    @OneToMany(mappedBy = "category")
    private List<ErrorArchive> errorArchiveList = new ArrayList<>();
}